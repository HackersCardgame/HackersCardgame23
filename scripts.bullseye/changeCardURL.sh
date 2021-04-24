#!/bin/bash

for i in $(find $1 -name '*.svg'); do sed -i 's/https:\/\/0x8.ch\/HackersCardgame22/https:\/\/0x8.ch\/HackersCardgame23/g' "$i"; done
