pipeline {
  agent any
  stages {
    stage('deploy') {
      steps {
        sh 'rm -rf /usr/share/tomcat/webapps/ui || true'
        sh 'cp -r build /usr/share/tomcat/webapps/ui'
      }
    }
  }
}