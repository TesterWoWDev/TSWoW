cmake_minimum_required(VERSION 3.16)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_CXX_EXTENSIONS OFF)



project(tester-mod)
include_directories(../../../../../bin/include)

file (GLOB headers "../../../../../bin/include/*.h")

file (GLOB libs "../../../../../bin/libraries/Release/*.lib")

add_library(tester-mod SHARED livescripts/death.cpp livescripts/ID.cpp livescripts/Killstreak.cpp livescripts/manaSystem.cpp livescripts/ModID.cpp livescripts/PacketCreator.cpp livescripts/QoLChanges.cpp livescripts/rangeLoot.cpp livescripts/skillshot.cpp livescripts/TableCreator.cpp livescripts/tester-mod-scripts.cpp)
target_link_libraries(tester-mod ${libs})

target_precompile_headers(tester-mod
    PUBLIC
        ${headers}
)