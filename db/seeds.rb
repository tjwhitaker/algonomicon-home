categories = ['Art', 'General', 'Language', 'Games', 'Vision']

categories.each do |title|
  Category.create(title: title)
end

User.create(email: 'test@algonomicon.com', password: 'test')