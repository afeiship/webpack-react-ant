# load taks
Dir.glob("./node_modules/rake-*/index.rake").each do |task|
  load task
end

namespace :app do
  desc "Sync spa files"
  task :sync do |task, args|
    # sh 'curl https://codeload.github.com/afeiship/webpack-react-spa/zip/master -O -J -L'
    # sh 'unzip -xo webpack-react-spa-master.zip'
    # sh 'cp -R -f webpack-react-spa-master/{*,.*} .' rescue nil
    # sh 'rm -rf webpack-react-spa-master*'
    File.write('./README.md', File.read('./README.md').gsub('webpack-react-spa', 'webpack-react-ant'))
    File.write('./package.json', File.read('./package.json').gsub('webpack-react-spa', 'webpack-react-ant'))
  end
end
