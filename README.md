# GITSCAFF

Simple CLI tool to help create base templates using Git Repositories 

### Currently Supports 
- Github
- Gitlab


### Installation

#### Prereq
 - Node and NPM installed


Run the below command to get started

```
    curl https://curl-scripts.siddharthgelera.com/gitscaff-setup/setup.sh | bash
```


### Usage

The cli accepts the following format, private repositories are also supported and you'll be asked to login accordingly.


```
gitscaff <github|gitlab>:username/repo <directory>
```

### Examples

```
gitscaff github:barelyhuman/repo <folder-name>
gitscaff gitlab:barelyhuman/Group1/Group2/repo <folder-name>
gitscaff gitlab:barelyhuman/repo <folder-name>
```
