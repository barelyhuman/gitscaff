import mri from 'mri';
import fs from 'fs';
import { exec } from 'child_process';
import path from 'path';
import chalk from 'chalk';
import rimraf from 'rimraf';

const argv = mri(process.argv.slice(2));

const repo = argv._[0];
const dir = argv._[1] ? path.resolve(argv._[1]) : null;

function shortHandReposParser(repo) {
    const regex = /^((github|gitlab)(?:[:]))+(\w+[-]\w+\/|\w+\/)([^\s]+)$/i;
    const matchGroup = repo.match(regex);
    return {
        url: "https://" + matchGroup[2] + '.com/' + matchGroup[3] + matchGroup[4],
        username: matchGroup[3],
        repo: matchGroup[4],
        folder: matchGroup[4].split('/').pop()
    };
}

function clone(repo, dir) {
    if (!dir) {
        dir = repo.folder
    }
    let url = `git clone --depth=1 ${repo.url} ${dir || repo.folder}`;
    exec(url, async (err) => {
        if (err) {
            console.error(chalk.red(String(err)));
        } else {
            try {
                await removeGitDir(path.join(dir, '.git'));
                console.log(chalk.green("Created: " + dir));
            }
            catch (err) {
                console.error(err);
            }
        }
    });
}


function removeGitDir(directory) {
    return new Promise(function (resolve, reject) {
        rimraf(directory, fs, (err) => {
            if (err) {
                return reject(err)
            }
            resolve();
        });
    });
}


const parsedRepo = shortHandReposParser(repo);

clone(parsedRepo, dir);



