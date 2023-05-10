#delete docs and src folders
mdbook build
mv book docs
git add .
git commit -m "update"
git push 