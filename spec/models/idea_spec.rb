require 'rails_helper'

RSpec.describe Idea, type: :model do
  context "validations" do
    it { should validate_presence_of(:title) }
    it { should validate_presence_of(:body) }
    it { should validate_presence_of(:quality) }
  end

  context "default quality" do
    it "should be swill" do
      idea = Idea.new(title: "test title", body: "test body")
      expect(idea.quality).to eq "swill"
    end
  end
end
