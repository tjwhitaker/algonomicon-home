categories = ['Art', 'History', 'Language', 'Nature', 'Society', 'Space']

categories.each do |title|
  Category.create(title: title)
end

for i in 0..16 do
  Project.create(title: Faker::Company.name, 
                 description: Faker::Company.bs,
                 content: Faker::Markdown.sandwich)
end