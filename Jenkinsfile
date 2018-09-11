pipeline {
    agent {
        docker {
            image 'node:6-alpine' 
            args '-p 3000:3000' 
        }
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        stage('Deploy') {
            steps {
                withAWS(credentials: 'AKIAI24LXA6OHB2BRG2Q') {
                    s3Upload(bucket:"bb8-test-celso", path:'/', includePathPattern:'**/*', workingDir:'dist')
                }
            }
        }
    }
}