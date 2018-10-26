Rails.application.routes.draw do
  root 'pages#home'

  get 'about',   to: 'pages#about'
  get 'contact', to: 'pages#contact'
  get 'search',  to: 'pages#search'

  get    'login',  to: 'sessions#new'
  post   'login',  to: 'sessions#create'
  delete 'logout', to: 'sessions#destroy'

  resources :articles,   only: [:index, :show]
  resources :categories, only: [:index, :show]
  resources :datasets,   only: [:index, :show]
  resources :events,     only: [:index, :show]
  resources :papers,     only: [:index, :show]
  resources :projects,   only: [:index, :show]

  namespace :admin do
    root 'pages#dashboard'

    resources :articles
    resources :categories
    resources :datasets
    resources :events
    resources :papers
    resources :projects
    resources :users
  end
end
