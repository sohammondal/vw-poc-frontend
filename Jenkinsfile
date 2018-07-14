pipeline{
    agent { label 'master' }
    stages{
        stage('Fetch'){
            steps{
                 git 'https://github.com/sohammondal/vw-poc-frontend.git'
            }
        }
        stage('Build'){
            
            steps{
                nodejs('nodejs') {
                    sh '''
                        cd frontend
                        npm install
                        npm run build
                    '''
                }    
            }
            
        }
        stage('Code Analysis'){
            steps{
                sh "/var/jenkins_home/tools/hudson.plugins.sonar.SonarRunnerInstallation/Sonarcube/bin/sonar-scanner -e -Dsonar.host.url=${env.SonarURL} -Dsonar.login=${env.SonarUsername} -Dsonar.password=${env.SonarPassword} -Dproject.settings=/var/jenkins_home/workspace/VeoliaWatersFrontend/frontend/build \"-Dsonar.projectName=VW-POC Frontend\" -Dsonar.projectVersion=1.0 -Dsonar.projectKey=VW-POC:Frontend -Dsonar.sources=build/ -Dsonar.projectBaseDir=/var/jenkins_home/workspace/VeoliaWatersFrontend"
            }
        }
        stage('Unit Test'){
            steps{
                sh 'echo \'Testing\' ' 
            }
        }
        stage('Deploy'){
            steps{
                sh 'cd ..'
                sh 'echo \'Deploying built code to servers via Ansible\' '
                sh 'ansible-playbook ansible/copy-file.yaml'
            }
        }
        stage('Functional Test'){
            agent { label 'WindowsNode' }
            steps{
                echo 'Functional Testing...'
                
                    git 'https://github.com/sohammondal/vw-poc-frontend.git'
                    bat '''
                        cd frontend
                        npm install
                        cd test
                        node nightwatch.js -e chrome -a VW-POC-TEST
                    '''
            }
        }
        stage('Update CDN'){
            steps{
                sh 'ansible-playbook ansible/update-cdn.yaml'
            }
        }
    }
}