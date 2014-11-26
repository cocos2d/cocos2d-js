#!/bin/bash
# exit this script if any commmand fails
set -e

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
PROJECT_ROOT="$DIR"/../..

if [ -z "$NDK_ROOT" ]; then
    export NDK_ROOT=$HOME/bin/android-ndk
fi

if [ -z "$PYTHON_BIN" ]; then
    export PYTHON_BIN=/usr/bin/python
fi


if [ "$GEN_COCOS_FILES"x = "YES"x ]; then
    if [ "$TRAVIS_PULL_REQUEST" != "false" ]; then
        exit 0
    fi
    if [ -z "${GH_EMAIL}" ]; then
        echo "GH_EMAIL not set"
        exit 1
    fi
    if [ -z "${GH_USER}" ]; then
        echo "GH_USER not set"
        exit 1
    fi
    if [ -z "${GH_PASSWORD}" ]; then
        echo "GH_USER not set"
        exit 1
    fi

    cd $PROJECT_ROOT/tools/travis-scripts
    ./generate-cocosfiles.sh
elif [ "$GEN_BINDINGS"x = "YES"x ]; then
    # Re-generation of the javascript bindings can perform push of the new
    # version back to github.  We don't do this for pull requests, or if
    # GH_USER/GH_EMAIL/GH_PASSWORD environment variables are not set correctly
    # by the encoded variables in the .travis.yml file.  (e.g. if cloned repo's
    # want to use travis).
    if [ "$TRAVIS_PULL_REQUEST" != "false" ]; then
        exit 0
    fi
    if [ -z "${GH_EMAIL}" ]; then
        echo "GH_EMAIL not set"
        exit 1
    fi
    if [ -z "${GH_USER}" ]; then
        echo "GH_USER not set"
        exit 1
    fi
    if [ -z "${GH_PASSWORD}" ]; then
        echo "GH_USER not set"
        exit 1
    fi

    cd $PROJECT_ROOT/tools/travis-scripts
    ./generate-bindings.sh
elif [ "$PLATFORM"x = "android"x ]; then
    export NDK_ROOT=$HOME/bin/android-ndk

    # Generate binding glue codes
    echo "Generating bindings glue codes ..."
    cd $PROJECT_ROOT/tools/travis-scripts
    ./generate-bindings.sh
    # ./generate-cocosfiles.sh

    cd $PROJECT_ROOT/build
    ./android-build.py -n "-j8" all

elif [ "$PLATFORM"x = "nacl"x ]; then
    export NACL_SDK_ROOT=$HOME/bin/nacl_sdk/pepper_canary
    export PATH=$PATH:$NACL_SDK_ROOT/toolchain/linux_x86_newlib/bin
    export PATH=$PATH:$NACL_SDK_ROOT/toolchain/linux_arm_newlib/bin
    cd $PROJECT_ROOT/build
    make -j4
elif [ "$PLATFORM"x = "linux"x ]; then
    # Generate binding glue codes
    echo "Generating bindings glue codes ..."
    cd $PROJECT_ROOT/tools/travis-scripts
    ./generate-bindings.sh
    ./generate-cocosfiles.sh

    echo "Building cocos2d-x"
    cd $PROJECT_ROOT/build
    mkdir -p linux-build
    cd linux-build
    cmake ../..
    make -j10
    # build template
    echo "Building template projects for linux ..."
    cd $PROJECT_ROOT/tools/project-creator
    ./create_project.py -n MyGameCpp -k com.MyCompany.AwesomeGameCpp -l cpp -p $HOME
    ./create_project.py -n MyGameLua -k com.MyCompany.AwesomeGameLua -l lua -p $HOME
    ./create_project.py -n MyGameJs -k com.MyCompany.AwesomeGameJs -l javascript -p $HOME
    cd $HOME/MyGameCpp
    mkdir build
    cd build
    cmake ..
    make -j10

    cd $HOME/MyGameLua
    mkdir build
    cd build
    cmake ..
    make -j10

    cd $HOME/MyGameJs
    mkdir build
    cd build
    cmake ..
    make -j10

elif [ "$PLATFORM"x = "emscripten"x ]; then
    # Generate binding glue codes
    echo "Generating bindings glue codes ..."
    cd $PROJECT_ROOT/tools/travis-scripts
    ./generate-bindings.sh
    ./generate-cocosfiles.sh

    cd $PROJECT_ROOT/build
    export PYTHON=/usr/bin/python
    export LLVM=$HOME/bin/clang+llvm-3.2/bin
    export LLVM_ROOT=$LLVM
    EMCC_DEBUG=1 make PLATFORM=emscripten -j 8
elif [ "$PLATFORM"x = "ios"x ]; then
    cd $PROJECT_ROOT/tools/travis-scripts
    ./generate-bindings.sh
    # ./generate-cocosfiles.sh

    cd $PROJECT_ROOT/build
    xctool -project cocos2d_jsb_samples.xcodeproj -scheme "Test JavaScript Mac" test
    xctool -project cocos2d_jsb_samples.xcodeproj -scheme "Test JavaScript iOS" test
else
    echo "Unknown \$PLATFORM: '$PLATFORM'"
    exit 1
fi