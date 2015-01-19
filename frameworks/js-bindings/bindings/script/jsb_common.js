/*
 * Copyright (c) 2013-2014 Chukong Technologies Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

cc.KEY = {
    none:0,

    // android
    back:6,
    menu:18,

    // desktop
    backspace:8,
    tab:9,

    enter:13,

    shift:16, //should use shiftkey instead
    ctrl:17, //should use ctrlkey
    alt:18, //should use altkey
    pause:19,
    capslock:20,

    escape:27,
    space:32,
    pageup:33,
    pagedown:34,
    end:35,
    home:36,
    left:37,
    up:38,
    right:39,
    down:40,
    select:41,

    insert:45,
    Delete:46,
    0:48,
    1:49,
    2:50,
    3:51,
    4:52,
    5:53,
    6:54,
    7:55,
    8:56,
    9:57,
    a:65,
    b:66,
    c:67,
    d:68,
    e:69,
    f:70,
    g:71,
    h:72,
    i:73,
    j:74,
    k:75,
    l:76,
    m:77,
    n:78,
    o:79,
    p:80,
    q:81,
    r:82,
    s:83,
    t:84,
    u:85,
    v:86,
    w:87,
    x:88,
    y:89,
    z:90,

    num0:96,
    num1:97,
    num2:98,
    num3:99,
    num4:100,
    num5:101,
    num6:102,
    num7:103,
    num8:104,
    num9:105,
    '*':106,
    '+':107,
    '-':109,
    'numdel':110,
    '/':111,
    f1:112, //f1-f12 dont work on ie
    f2:113,
    f3:114,
    f4:115,
    f5:116,
    f6:117,
    f7:118,
    f8:119,
    f9:120,
    f10:121,
    f11:122,
    f12:123,

    numlock:144,
    scrolllock:145,

    semicolon:186,
    ',':186,
    equal:187,
    '=':187,
    ';':188,
    comma:188,
    dash:189,
    '.':190,
    period:190,
    forwardslash:191,
    grave:192,
    '[':219,
    openbracket:219,
    backslash:220,
    ']':221,
    closebracket:221,
    quote:222
};

var jsbkeyArr = [];
jsbkeyArr[0]=0;
jsbkeyArr[1]=cc.KEY["pause"];
jsbkeyArr[2]=cc.KEY["scrolllock"];
jsbkeyArr[3]=0;
jsbkeyArr[4]=0;
jsbkeyArr[5]=0;
if (cc.sys.os == cc.sys.OS_ANDROID)
{
    jsbkeyArr[6]=cc.KEY["back"];
}
else
{
    jsbkeyArr[6]=cc.KEY["escape"];
}

jsbkeyArr[7]=cc.KEY["backspace"];
jsbkeyArr[8]=cc.KEY["tab"];
jsbkeyArr[9]=0;
jsbkeyArr[10]=0;
jsbkeyArr[11]=cc.KEY["capslock"];
jsbkeyArr[12]=cc.KEY["shift"];//should use shiftkey instead
jsbkeyArr[13]=cc.KEY["shift"];
jsbkeyArr[14]=cc.KEY["ctrl"];//should use ctrlkey
jsbkeyArr[15]=cc.KEY["ctrl"];
jsbkeyArr[16]=cc.KEY["alt"];//should use altkey
jsbkeyArr[17]=cc.KEY["alt"];
jsbkeyArr[18]=cc.KEY["menu"];
jsbkeyArr[19]=0;
jsbkeyArr[20]=cc.KEY["insert"];
jsbkeyArr[21]=cc.KEY["home"];
jsbkeyArr[22]=cc.KEY["pageup"];
jsbkeyArr[23]=cc.KEY["Delete"];
jsbkeyArr[24]=cc.KEY["end"];
jsbkeyArr[25]=cc.KEY["pagedown"];
jsbkeyArr[26]=cc.KEY["left"];
jsbkeyArr[27]=cc.KEY["right"];
jsbkeyArr[28]=cc.KEY["up"];
jsbkeyArr[29]=cc.KEY["down"];
jsbkeyArr[30]=cc.KEY["numlock"];
jsbkeyArr[31]=cc.KEY["+"];
jsbkeyArr[32]=cc.KEY["-"];
jsbkeyArr[33]=cc.KEY["*"];
jsbkeyArr[34]=0;
jsbkeyArr[35]=cc.KEY["enter"];
jsbkeyArr[36]=cc.KEY["home"];
jsbkeyArr[37]=cc.KEY["up"];
jsbkeyArr[38]=cc.KEY["pageup"];
jsbkeyArr[39]=cc.KEY["left"];
jsbkeyArr[40]=cc.KEY["num5"];
jsbkeyArr[41]=cc.KEY["right"];
jsbkeyArr[42]=cc.KEY["end"];
jsbkeyArr[43]=cc.KEY["down"];
jsbkeyArr[44]=cc.KEY["pagedown"];
jsbkeyArr[45]=cc.KEY["insert"];
jsbkeyArr[46]=cc.KEY["Delete"];
jsbkeyArr[47]=cc.KEY["f1"];//f1-f12;
jsbkeyArr[48]=cc.KEY["f2"];
jsbkeyArr[49]=cc.KEY["f3"];
jsbkeyArr[50]=cc.KEY["f4"];
jsbkeyArr[51]=cc.KEY["f5"];
jsbkeyArr[52]=cc.KEY["f6"];
jsbkeyArr[53]=cc.KEY["f7"];
jsbkeyArr[54]=cc.KEY["f8"];
jsbkeyArr[55]=cc.KEY["f9"];
jsbkeyArr[56]=cc.KEY["f10"];
jsbkeyArr[57]=cc.KEY["f11"];
jsbkeyArr[58]=cc.KEY["f12"];
jsbkeyArr[59]=cc.KEY["space"];
jsbkeyArr[60]=0;
jsbkeyArr[61]=cc.KEY["quote"];
jsbkeyArr[62]=0;
jsbkeyArr[63]=0;
jsbkeyArr[64]=0;
jsbkeyArr[65]=0;
jsbkeyArr[66]=0;
jsbkeyArr[67]=cc.KEY["comma"]; // it's apostrophe in chinese input mode
jsbkeyArr[68]=0;
jsbkeyArr[69]=0;
jsbkeyArr[70]=0;
jsbkeyArr[71]=0;
jsbkeyArr[72]=cc.KEY["comma"];
jsbkeyArr[73]=cc.KEY["-"];
jsbkeyArr[74]=cc.KEY["period"];
jsbkeyArr[75]=cc.KEY["forwardslash"];//word keyboard
jsbkeyArr[76]=cc.KEY["num0"];
jsbkeyArr[77]=cc.KEY["num1"];
jsbkeyArr[78]=cc.KEY["num2"];
jsbkeyArr[79]=cc.KEY["num3"];
jsbkeyArr[80]=cc.KEY["num4"];
jsbkeyArr[81]=cc.KEY["num5"];
jsbkeyArr[82]=cc.KEY["num6"];
jsbkeyArr[83]=cc.KEY["num7"];
jsbkeyArr[84]=cc.KEY["num8"];
jsbkeyArr[85]=cc.KEY["num9"];
jsbkeyArr[86]=0;
jsbkeyArr[87]=cc.KEY["semicolon"];
jsbkeyArr[88]=0;
jsbkeyArr[89]=cc.KEY["equal"];
jsbkeyArr[90]=0;
jsbkeyArr[91]=0;
jsbkeyArr[92]=0;
jsbkeyArr[93]=cc.KEY["a"];
jsbkeyArr[94]=cc.KEY["b"];
jsbkeyArr[95]=cc.KEY["c"];
jsbkeyArr[96]=cc.KEY["d"];
jsbkeyArr[97]=cc.KEY["e"];
jsbkeyArr[98]=cc.KEY["f"];
jsbkeyArr[99]=cc.KEY["g"];
jsbkeyArr[100]=cc.KEY["h"];
jsbkeyArr[101]=cc.KEY["i"];
jsbkeyArr[102]=cc.KEY["j"];
jsbkeyArr[103]=cc.KEY["k"];
jsbkeyArr[104]=cc.KEY["l"];
jsbkeyArr[105]=cc.KEY["m"];
jsbkeyArr[106]=cc.KEY["n"];
jsbkeyArr[107]=cc.KEY["o"];
jsbkeyArr[108]=cc.KEY["p"];
jsbkeyArr[109]=cc.KEY["q"];
jsbkeyArr[110]=cc.KEY["r"];
jsbkeyArr[111]=cc.KEY["s"];
jsbkeyArr[112]=cc.KEY["t"];
jsbkeyArr[113]=cc.KEY["u"];
jsbkeyArr[114]=cc.KEY["v"];
jsbkeyArr[115]=cc.KEY["w"];
jsbkeyArr[116]=cc.KEY["x"];
jsbkeyArr[117]=cc.KEY["y"];
jsbkeyArr[118]=cc.KEY["z"];
jsbkeyArr[119]=cc.KEY["["];
jsbkeyArr[119]=cc.KEY["openbracket"];
jsbkeyArr[120]=cc.KEY["backslash"];
jsbkeyArr[121]=cc.KEY["]"];
jsbkeyArr[121]=cc.KEY["closebracket"];
jsbkeyArr[123]=cc.KEY["grave"];
jsbkeyArr[124]=cc.KEY["a"];
jsbkeyArr[125]=cc.KEY["b"];
jsbkeyArr[126]=cc.KEY["c"];
jsbkeyArr[127]=cc.KEY["d"];
jsbkeyArr[128]=cc.KEY["e"];
jsbkeyArr[129]=cc.KEY["f"];
jsbkeyArr[130]=cc.KEY["g"];
jsbkeyArr[131]=cc.KEY["h"];
jsbkeyArr[132]=cc.KEY["i"];
jsbkeyArr[133]=cc.KEY["j"];
jsbkeyArr[134]=cc.KEY["k"];
jsbkeyArr[135]=cc.KEY["l"];
jsbkeyArr[136]=cc.KEY["m"];
jsbkeyArr[137]=cc.KEY["n"];
jsbkeyArr[138]=cc.KEY["o"];
jsbkeyArr[139]=cc.KEY["p"];
jsbkeyArr[140]=cc.KEY["q"];
jsbkeyArr[141]=cc.KEY["r"];
jsbkeyArr[142]=cc.KEY["s"];
jsbkeyArr[143]=cc.KEY["t"];
jsbkeyArr[144]=cc.KEY["u"];
jsbkeyArr[145]=cc.KEY["v"];
jsbkeyArr[146]=cc.KEY["w"];
jsbkeyArr[147]=cc.KEY["x"];
jsbkeyArr[148]=cc.KEY["y"];
jsbkeyArr[149]=cc.KEY["z"];
jsbkeyArr[150]=0;
jsbkeyArr[151]=0;
jsbkeyArr[152]=0;
jsbkeyArr[153]=0;
jsbkeyArr[154]=0;
jsbkeyArr[155]=0;
jsbkeyArr[156]=0;
jsbkeyArr[157]=0;
jsbkeyArr[158]=0;
jsbkeyArr[159]=0;
jsbkeyArr[160]=0;
jsbkeyArr[161]=0;
jsbkeyArr[162]=0;
jsbkeyArr[163]=0;
jsbkeyArr[164]=cc.KEY["enter"];
jsbkeyArr[165]=0;
// html5 more key, these key can not trigge
//'numdel'
//select
//dash
