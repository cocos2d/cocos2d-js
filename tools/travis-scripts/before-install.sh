#!/bin/bash

# exit this script if any commmand fails
set -e

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
COCOS2DJS_ROOT="$DIR"/../..
COCOS2DX_ROOT="$DIR"/../../frameworks/js-bindings/cocos2d-x
HOST_NAME=""

pushd $COCOS2DX_ROOT
python download-deps.py -r=yes
git submodule update --init --recursive
popd

mkdir -p $HOME/bin
cd $HOME/bin

install_android_ndk()
{
    # Download android ndk
    if [ "$PLATFORM"x = "ios"x ]; then
        HOST_NAME="darwin"
    else
        HOST_NAME="linux"
    fi
    echo "Download android-ndk-r9b-${HOST_NAME}-x86_64.tar.bz2 ..."
    curl -O http://dl.google.com/android/ndk/android-ndk-r9b-${HOST_NAME}-x86_64.tar.bz2
    echo "Decompress android-ndk-r9b-${HOST_NAME}-x86_64.tar.bz2 ..."
    tar xjf android-ndk-r9b-${HOST_NAME}-x86_64.tar.bz2
    # Rename ndk
    mv android-ndk-r9b android-ndk
}

install_nacl_sdk()
{
    # NaCl compilers are built for 32-bit linux so we need to install
    # the runtime support for this.
    if [ ! -e "/lib/ld-linux.so.2" ]; then
        sudo apt-get update
        sudo apt-get install libc6:i386 libstdc++6:i386
    fi
    if [ ! -d nacl_sdl ]; then
        echo "Download nacl_sdk ..."
        wget http://storage.googleapis.com/nativeclient-mirror/nacl/nacl_sdk/nacl_sdk.zip
        echo "Decompress nacl_sdk.zip"
        unzip nacl_sdk.zip
    fi
    nacl_sdk/naclsdk update --force pepper_canary
}

if [ "$GEN_COCOS_FILES"x = "YES"x ]; then
    exit 0
elif [ "$GEN_BINDINGS"x = "YES"x ]; then
    if [ "$TRAVIS_PULL_REQUEST" != "false" ]; then
        exit 0
    fi
    install_android_ndk
elif [ "$PLATFORM"x = "linux"x ]; then
    sudo add-apt-repository -y ppa:ubuntu-toolchain-r/test
    sudo apt-get update
    sudo apt-get install gcc-4.7 g++-4.7
    sudo update-alternatives --install /usr/bin/gcc gcc /usr/bin/gcc-4.6 60 --slave /usr/bin/g++ g++ /usr/bin/g++-4.6
    sudo update-alternatives --install /usr/bin/gcc gcc /usr/bin/gcc-4.7 90 --slave /usr/bin/g++ g++ /usr/bin/g++-4.7
    g++ --version
    bash $COCOS2DJS_ROOT/build/install-deps-linux.sh
    install_android_ndk
elif [ "$PLATFORM"x = "nacl"x ]; then
    install_nacl_sdk
elif [ "$PLATFORM"x = "android"x ]; then
    install_android_ndk
elif [ "$PLATFORM"x = "emscripten"x ]; then
    sudo rm -rf /dev/shm && sudo ln -s /run/shm /dev/shm
    install_android_ndk
elif [ "$PLATFORM"x = "ios"x ]; then
    install_android_ndk
else
    echo "Unknown \$PLATFORM: '$PLATFORM'"
    exit 1
fi

