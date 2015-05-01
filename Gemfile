source 'https://rubygems.org'

ruby '1.9.3'

if RUBY_VERSION =~ /1.9/ # default encoding for db:seed
  Encoding.default_external = Encoding::UTF_8
  Encoding.default_internal = Encoding::UTF_8
end

gem 'rails', '3.2.16'
gem 'jquery-rails'
gem 'jquery-ui-rails'
gem 'haml'
gem 'rake'
gem 'jasmine'
gem 'devise'
gem 'figaro'
gem "font-awesome-rails"
gem 'geocoder'
gem 'activeadmin'

group :development, :test do
  gem 'sqlite3'
  gem 'ruby-debug19'
  gem 'database_cleaner'
  gem 'cucumber-rails', :require => false
  gem 'rspec-rails', '~> 2.14.0'
  gem 'simplecov'
  gem 'factory_girl'
  gem 'factory_girl_rails', '~> 4.0'
  gem 'codeclimate-test-reporter'
	gem 'reek'
	gem 'poltergeist'
end

group :production do
  gem 'pg'
end

group :assets do
  gem 'uglifier'
  gem 'therubyracer'
  gem 'sass-rails'
  gem 'coffee-rails'
end

gem 'omniauth-facebook', :github => 'mkdynamic/omniauth-facebook'
gem 'omniauth-twitter', :github => 'arunagw/omniauth-twitter'
