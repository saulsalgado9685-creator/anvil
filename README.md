<p align="center">
  <img src="images/anvil_dark.png" width="350">
</p>

##

Anvil is a modern open-source C++ library for solving ordinary differential equations (ODEs) and building high-performance numerical simulations for scientific and engineering applications.

- Website: https://saulsalgado9685-creator.github.io/Anvil/
- Documentation: https://saulsalgado9685-creator.github.io/Anvil/documentation.html
- Source code: https://github.com/saulsalgado9685-creator/anvil
- License: MIT License

## Features

- Header-only architecture
- Explicit and adaptive ODE solvers
- Modern C++17 implementation
- Extensible solver interfaces
- High-performance numerical execution
- Deterministic and reproducible simulations
- Lightweight and dependency-free core

## Applications

Anvil is designed for scientific computing and engineering domains including:

- Physics simulation
- Dynamical systems
- Control systems
- Mechanical modeling
- Electrical circuit simulation
- Applied mathematics research

## Example

```cpp
#include <anvil/anvil.hpp>

int main() {
    anvil::RK4<double> solver;

    solver.set_step_size(0.01);
    solver.set_initial_condition(1.0);

    auto result = solver.solve([](double t, double y) {
        return -y;
    }, 0.0, 10.0);

    return 0;
}
