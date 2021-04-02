cmake_minimum_required(VERSION 3.16)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_CXX_EXTENSIONS OFF)



project(quests-mod)
include_directories(../../../../../bin/include)

file (GLOB headers "../../../../../bin/include/*.h")

file (GLOB libs "../../../../../bin/libraries/Release/*.lib")

add_library(quests-mod SHARED livescripts/ID.cpp livescripts/ModID.cpp livescripts/PacketCreator.cpp livescripts/quests-mod-scripts.cpp livescripts/TableCreator.cpp)
target_link_libraries(quests-mod ${libs})

target_precompile_headers(quests-mod
    PUBLIC
        ${headers}
)