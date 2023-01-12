# rpi-pico
A collection of projects working with the Raspberry Pi Pico

# Execute code on the device

Drag and drop the .uf2 file located in the build folder of the project you wish to upload onto the RPi Pico

# Getting Started - Installation

Install CMake
```
sudo apt install cmake gcc-arm-none-eabi libnewlib-arm-none-eabi libstdc++-arm-none-eabi-newlib
```

Clone pico-sdk
```
git clone https://github.com/raspberrypi/pico-sdk
```
Copy pico_sdk_import.cmake from SDK into project directory

Set PICO_SDK_PATH to SDK location
```
export PICO_SDK_PATH=../pico-sdk
```

Set up a CMakeLists.txt file in directory
```
cmake_minimum_required(VERSION 3.12)

include(pico_sdk_import.cmake)

project(blink C CXX ASM)
set(CMAKE_C_STANDARD 11)
set(CMAKE_CXX_STANDARD 17)


pico_sdk_init()

add_executable(blink
        blink.c
        )

target_link_libraries(blink pico_stdlib)

pico_add_extra_outputs(blink)
```

Create CMake build directory
```
mkdir build
cd build
cmake ..
```

Build the file
```
make file
```

Now, you can copy the generated uf2 file over to the Pico W. Hold down the BOOTSEL on the Pico W as you plug it in, and it will show as an external drive. After the uf2 file is copied over, it'll automatically update