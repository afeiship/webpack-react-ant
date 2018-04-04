#!/bin/bash

docker run -it -v $PWD:/work -w /work node /work/build.sh

