import mri from 'mri';
import fs from 'fs';
import { exec } from 'child_process';
import path from 'path';
import chalk from 'chalk';
import rimraf from 'rimraf';

const argv = mri(process.argv.slice(2));

const repo = argv._[0];
const dir = path.resolve(argv._[1]);

function shortHandReposParser(repo) {
    const regex = /^((github|gitlab)(?:[:]))+(\w+[-]\w+\/|\w+\/)([^\s]+)$/g;
    const matchGroup = repo.match(regex);
    console.log(matchGroup);
    return "https://" + matchGroup[2] + '.com/' + matchGroup[3] + matchGroup[4];
}

function clone(repoUrl, dir) {
    exec(`git clone --depth=1 ${repoUrl} ${dir}`, async (err) => {
        if (err) {
            console.error(err);
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


const repoUrl = shortHandReposParser(repo);

clone(repoUrl, dir);



