Rails.application.routes.draw do
  root 'pages#home'

  get    'login',  to: 'sessions#new'
  post   'login',  to: 'sessions#create'
  delete 'logout', to: 'sessions#destroy'

  resources :categories, only: [:index, :show]
  resources :projects,   only: [:index, :show]

  namespace :admin do
    root 'pages#dashboard'

    resources :categories
    resources :projects
    resources :users
  end
end
