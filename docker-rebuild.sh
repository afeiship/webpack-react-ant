#!/bin/bash

docker run -it --rm -v $PWD:/work -w /work node bash /work/rebuild.sh

