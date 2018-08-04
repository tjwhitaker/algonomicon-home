Rails.application.routes.draw do
  root 'pages#home'

  resources :projects
  resources :users
  resources :sessions
end
