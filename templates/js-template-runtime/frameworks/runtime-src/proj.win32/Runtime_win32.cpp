
#include "Runtime.h"

#include <io.h>
#include <direct.h>
#include <stdio.h>
#include <vector>
#include <string>

#include "cocos2d.h"
using namespace std;

bool browseDir(const char *dir,const char *filespec,vector<string> &filterArray,vector<string> &fileList)
{
    if (chdir(dir) != 0)
    {
        return false;
    }

    long hFile;
    _finddata_t fileinfo;
    if ((hFile=_findfirst(filespec,&fileinfo)) != -1)
    {
        do
        {
            if ((fileinfo.attrib & _A_SUBDIR))
            {
                continue;
            }

            char *pszexten=strrchr(fileinfo.name,'.');
            char szextension[_MAX_PATH_]={0};
            if (pszexten)
            {
                strcpy(szextension,"*");
                strcat(szextension,pszexten);
                if (find(filterArray.begin(),filterArray.end(),szextension) != filterArray.end())
                {
                    continue;
                }
            }

            strcpy(szextension,fileinfo.name);
            if (find(filterArray.begin(),filterArray.end(),szextension) != filterArray.end())
            {
                continue;
            }

            char fullFileName[_MAX_PATH_] ={0};
            sprintf(fullFileName,"%s%s",dir,fileinfo.name);
            fileList.push_back(fullFileName);   
        } while (_findnext(hFile,&fileinfo) == 0);
        _findclose(hFile);
    }

    if (chdir(dir) != 0)
    {
        return false;
    }

    if ((hFile=_findfirst("*.*",&fileinfo)) != -1)
    {
        do
        {
            if(!(fileinfo.attrib & _A_SUBDIR))
            {
                continue;
            }

            if (strcmp(fileinfo.name,".") == 0 || strcmp(fileinfo.name,"..") == 0)
            {
                continue;
            }

            if (find(filterArray.begin(),filterArray.end(),fileinfo.name) != filterArray.end())
            {
                continue;
            }

            char subdir[_MAX_PATH_]={0};
            sprintf(subdir,"%s%s/",dir,fileinfo.name);
            if (!browseDir(subdir,filespec,filterArray,fileList))
            {
                _findclose(hFile);
                return false;
            }		
        } while (_findnext(hFile,&fileinfo) == 0);
        _findclose(hFile);
    }
    return true;
}


string getIPAddress()
{
    WSADATA wsaData;  
    char name[155]={0};
    char *ip=nullptr;
    PHOSTENT hostinfo;

    if ( WSAStartup( MAKEWORD(2,0), &wsaData ) == 0 )   
    {  
        if( gethostname ( name, sizeof(name)) == 0)   
        { 
            if((hostinfo = gethostbyname(name)) != NULL)   
            { 
                ip = inet_ntoa (*(struct in_addr *)*hostinfo->h_addr_list);
            }   
        }   
        WSACleanup( );
    }   
    return ip;
}