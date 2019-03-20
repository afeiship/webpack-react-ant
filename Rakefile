# load taks
Dir.glob("./node_modules/rake-*/index.rake").each do |task|
  load task
end

namespace :app do
  desc "Sync spa files"
  task :sync do |task, args|
    # sh 'git clone --depth=1 https://github.com/afeiship/webpack-react-spa.git -b master'
    sh 'mv webpack-react-spa/{**,.*} .'
  end
end
