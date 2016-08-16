class Seeds

  def initialize
    create_ideas
  end

  def create_ideas
    Idea.create(title: "Idea 1", body: "This is my first idea!", quality: 1)
    puts "created idea 1"
    Idea.create(title: "Idea 2", body: "This is my second idea!", quality: 0)
    puts "created idea 2"
    Idea.create(title: "Idea 3", body: "This is my third idea!", quality: 1)
    puts "created idea 3"
    Idea.create(title: "Idea 4", body: "This is my fourth idea!", quality: 2)
    puts "created idea 4"
  end

end

Seeds.new
