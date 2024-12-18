# Some random trial of implementing algorithms 4 the lulz

Tested on my macbook air m2.

## Sorting algorithms

Run using `node sort.js <bubble|selection|insertion|merge|quick>`

Result is presented in the format m:ss.mmm

| **Numbers** | Bubble       | Selection   | Insertion   | Merge        | Quick        |
| ----------- | ------------ | ----------- | ----------- | ------------ | ------------ |
| Number 1    | 0:35.898     | 0:5.179     | 0:2.262     | 0:00.027     | 0:00.023     |
| Number 2    | 0:35.819     | 0:5.194     | 0:2.178     | 0:00.020     | 0:00.013     |
| Number 3    | 0:35.769     | 0:5.206     | 0:2.255     | 0:00.020     | 0:00.014     |
| Number 4    | 0:35.686     | 0:5.234     | 0:2.215     | 0:00.020     | 0:00.010     |
| Number 5    | 0:35.803     | 0:5.249     | 0:2.199     | 0:00.036     | 0:00.012     |
| Number 6    | 0:35.716     | 0:5.246     | 0:2.230     | 0:00.020     | 0:00.010     |
| Number 7    | 0:36.039     | 0:5.212     | 0:2.228     | 0:00.019     | 0:00.009     |
| Number 8    | 0:35.779     | 0:5.242     | 0:2.200     | 0:00.019     | 0:00.011     |
| Number 9    | 0:35.601     | 0:5.233     | 0:2.221     | 0:00.019     | 0:00.009     |
| Number 10   | 0:35.701     | 0:5.200     | 0:2.207     | 0:00.019     | 0:00.040     |
| **Average** | **0:35.781** | **0:5.219** | **0:2.220** | **0:00.022** | **0:00.015** |

| **Strings** | Bubble       | Selection    | Insertion    | Merge        | Quick        |
| ----------- | ------------ | ------------ | ------------ | ------------ | ------------ |
| String 1    | 2:41.146     | 0:43.375     | 0:24.918     | 0:00.040     | 0:00.043     |
| String 2    | 2:39.558     | 0:43.108     | 0:24.686     | 0:00.038     | 0:00.031     |
| String 3    | 2:21.589     | 0:42.929     | 0:24.597     | 0:00.038     | 0:00.031     |
| String 4    | 2:21.199     | 0:43.020     | 0:24.692     | 0:00.038     | 0:00.030     |
| String 5    | 2:22.084     | 0:43.453     | 0:24.591     | 0:00.038     | 0:00.031     |
| String 6    | 2:20.026     | 0:42.933     | 0:26.220     | 0:00.038     | 0:00.031     |
| String 7    | 2:19.247     | 0:42.613     | 0:24.464     | 0:00.038     | 0:00.031     |
| String 8    | 2:20.576     | 0:42.745     | 0:37.259     | 0:00.038     | 0:00.031     |
| String 9    | 2:19.715     | 0:42.661     | 0:36.442     | 0:00.038     | 0:00.031     |
| String 10   | 2:20.882     | 0:42.740     | 0:35.340     | 0:00.038     | 0:00.031     |
| **Average** | **2:24.602** | **0:42.958** | **0:28.321** | **0:00.038** | **0:00.032** |

## Searching algorithms

### Ordered

Run using `node search.js ordered <linear|binary|jump|interpolation>`

| **Numbers** | Linear      | Binary      | Jump        | Interpolation |
| ----------- | ----------- | ----------- | ----------- | ------------- |
| Numbers 1   | 0.532ms     | 0.153ms     | 0.087ms     | 0.072ms       |
| Numbers 2   | 0.020ms     | 0.009ms     | 0.007ms     | 0.005ms       |
| Numbers 3   | 0.028ms     | 0.004ms     | 0.025ms     | 0.070ms       |
| Numbers 4   | 0.022ms     | 0.004ms     | 0.016ms     | 0.004ms       |
| Numbers 5   | 0.072ms     | 0.061ms     | 0.075ms     | 0.061ms       |
| Numbers 6   | 0.061ms     | 0.007ms     | 0.078ms     | 0.005ms       |
| Numbers 7   | 0.038ms     | 0.003ms     | 0.059ms     | 0.006ms       |
| Numbers 8   | 0.030ms     | 0.004ms     | 0.025ms     | 0.008ms       |
| Numbers 9   | 0.064ms     | 0.011ms     | 0.079ms     | 0.004ms       |
| Numbers 10  | 0.014ms     | 0.010ms     | 0.016ms     | 0.005ms       |
| **Average** | **0.088ms** | **0.027ms** | **0.048ms** | **0.024ms**   |

| **Strings** | Linear      | Binary      | Jump        | Interpolation |
| ----------- | ----------- | ----------- | ----------- | ------------- |
| Strings 1   | 0.668ms     | 0.018ms     | 0.096ms     | N/A           |
| Strings 2   | 0.022ms     | 0.015ms     | 0.018ms     | N/A           |
| Strings 3   | 0.220ms     | 0.011ms     | 0.088ms     | N/A           |
| Strings 4   | 0.202ms     | 0.012ms     | 0.083ms     | N/A           |
| Strings 5   | 0.236ms     | 0.012ms     | 0.088ms     | N/A           |
| Strings 6   | 0.093ms     | 0.011ms     | 0.063ms     | N/A           |
| Strings 7   | 0.288ms     | 0.013ms     | 0.135ms     | N/A           |
| Strings 8   | 0.229ms     | 0.005ms     | 0.065ms     | N/A           |
| Strings 9   | 0.319ms     | 0.005ms     | 0.093ms     | N/A           |
| Strings 10  | 0.144ms     | 0.005ms     | 0.066ms     | N/A           |
| **Average** | **0.242ms** | **0.011ms** | **0.080ms** | **N/A**       |

### Unordered

Run using `node search.js unordered <linear>`

| **Numbers** | Linear      |
| ----------- | ----------- |
| Numbers 1   | 0.590ms     |
| Numbers 2   | 0.005ms     |
| Numbers 3   | 0.028ms     |
| Numbers 4   | 0.028ms     |
| Numbers 5   | 0.084ms     |
| Numbers 6   | 0.040ms     |
| Numbers 7   | 0.057ms     |
| Numbers 8   | 0.046ms     |
| Numbers 9   | 0.078ms     |
| Numbers 10  | 0.014ms     |
| **Average** | **0.097ms** |

| **Strings** | Linear      |
| ----------- | ----------- |
| Strings 1   | 0.857ms     |
| Strings 2   | 0.051ms     |
| Strings 3   | 0.314ms     |
| Strings 4   | 0.296ms     |
| Strings 5   | 0.404ms     |
| Strings 6   | 0.213ms     |
| Strings 7   | 0.570ms     |
| Strings 8   | 0.442ms     |
| Strings 9   | 0.536ms     |
| Strings 10  | 0.251ms     |
| **Average** | **0.393ms** |
