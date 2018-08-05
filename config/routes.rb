Rails.application.routes.draw do
  root 'pages#home'

  resources :projects
  resources :users
  resources :sessions

  get    'login',  to: 'sessions#new',     as: 'login'
  delete 'logout', to: 'sessions#destroy', as: 'logout'
end
