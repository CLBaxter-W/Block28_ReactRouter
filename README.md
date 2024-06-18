/** Deployment link from netlify **/

https://genuine-otter-f3259b.netlify.app

/** Repeating the repository linking directions .... **/

-- Created local git repository, with skeleton project

    in terminal or project top $ git init $ git add . $ git commit -m "Great initial message"

-- created empty cloud repository, with skeleton README.md

    in cloud repository create w/name and readme copy from the "code" button -> ssh for clone (i.e git@github.com:CLBaxter-W/Block26_ContactList.git)

    in terminal window cd to the head of local project directory structure $ git remote set-url origin <remote_repo_URL> $ git push -u origin --all

-- To note may need to reset local to match anything in the cloud repository already $ git pull --rebase origin main

…or after creating local repository - push an existing repository from the command line

(in terminal or project top $ git init $ git add . $ git commit -m "Great initial message")

git remote add origin git@github.com:CLBaxter-W/Block28_ReactRouter.git
git branch -M main
git push -u origin main
