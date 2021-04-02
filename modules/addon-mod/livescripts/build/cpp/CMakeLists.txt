cmake_minimum_required(VERSION 3.16)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_CXX_EXTENSIONS OFF)



project(addon-mod)
include_directories(../../../../../bin/include)

file (GLOB headers "../../../../../bin/include/*.h")

file (GLOB libs "../../../../../bin/libraries/Release/*.lib")

add_library(addon-mod SHARED livescripts/addon-mod-scripts.cpp livescripts/atlas.cpp livescripts/ID.cpp livescripts/ModID.cpp livescripts/PacketCreator.cpp livescripts/scrapper.cpp livescripts/TableCreator.cpp shared/Messages.cpp)
target_link_libraries(addon-mod ${libs})

target_precompile_headers(addon-mod
    PUBLIC
        ${headers}
)