categories = ['Art', 'History', 'Language', 'Nature', 'Society', 'Space']

categories.each do |title|
  Category.create(title: title)
end

for i in 0..16 do
  Project.create(title: [Faker::Lovecraft.deity, Faker::Lovecraft.tome, Faker::Lovecraft.location].sample,
                 description: Faker::Lovecraft.sentence,
                 content: Faker::Markdown.sandwich)
end