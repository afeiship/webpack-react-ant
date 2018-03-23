#!/bin/bash

docker run -it -v $PWD:/work -w /work node /work/rebuild.sh

