# GITSCAFF

Simple scaffolding using git repositories as templates. 

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
gitscaff github:reap-r/repo
gitscaff gitlab:reap-r/Group1/Group2/repo
gitscaff gitlab:reap-r/repo
```