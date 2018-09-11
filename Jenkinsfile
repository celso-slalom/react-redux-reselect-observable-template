pipeline {
    agent {
        docker {
            image 'node:6-alpine' 
            args '-p 3000:3000' 
        }
    }
    parameters {
        string(name: 'BucketName', defaultValue: 'bb8-test-celso', description: 'Bucket name to deploy')
        string(name: 'AWS Credentials ID', description: 'The AWS credentials ID of type usename and password')
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('Install') { 
            steps {
                sh 'npm install' 
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Deploy') {
            steps {
                withAWS(credentials: '5766a5cb-7ee9-4d29-b098-71238516a4f9') {
                    s3Upload(bucket:"${params.BucketName}", path:'/', includePathPattern:'**/*', workingDir:'/dist')
                }
            }
        }
    }
}