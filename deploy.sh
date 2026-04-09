#!/bin/bash
(cd application && rm -rf _site && yarn build)
rm -rf docs
cp -r application/_site docs
echo "artz.holdings" > docs/CNAME