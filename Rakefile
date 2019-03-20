# load taks
Dir.glob("./node_modules/rake-*/index.rake").each do |task|
  load task
end

namespace :app do
  desc "Sync spa files"
  task :sync do |task, args|
    sh 'curl https://codeload.github.com/afeiship/webpack-react-spa/zip/master -O -J -L'
    sh 'unzip -xo webpack-react-spa-master.zip'
    sh 'cp -R webpack-react-spa-master/{*,.*} .'
    sh 'rm -rf webpack-react-spa-master*'
  end
end
