# load taks
Dir.glob("./node_modules/rake-*/index.rake").each do |task|
  load task
end

namespace :app do
  desc "Sync spa files"
  task :sync do |task, args|
    sh 'curl https://codeload.github.com/afeiship/webpack-react-spa/zip/master -O -J -L'
    sh 'unzip -xo webpack-react-spa-master.zip'
    sh 'cp -R -f webpack-react-spa-master/{*,.*} .' rescue nil
    sh 'rm -rf webpack-react-spa-master*'

    # replace file:
    Dir['./README.md','./package.json'].each do |file|
      File.write(file, File.read(file).gsub('webpack-react-spa', 'webpack-react-ant'))
    end
  end
end
