cmake_minimum_required(VERSION 3.18)
set(CMAKE_CXX_STANDARD 17)
project(tester-mod)
include_directories(../../../../../bin/include)

file (GLOB headers "../../../../../bin/include/*.h")
file (GLOB libs "../../../../../bin/libraries/Release/*.lib")

add_library(tester-mod SHARED scripts/ID.cpp scripts/Necromancer.cpp scripts/PvP.cpp scripts/QoLChanges.cpp scripts/tester_mod_scripts.cpp scripts/VIP.cpp)
target_link_libraries(tester-mod ${libs})

target_precompile_headers(tester-mod
    PUBLIC
        ${headers}
)