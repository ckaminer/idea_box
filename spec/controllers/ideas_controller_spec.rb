require "rails_helper"

RSpec.describe IdeasController do
  fixtures :ideas
  describe "GET index" do
    it "can get all ideas in descending chronological order" do
      first = ideas(:two)
      get :index

      expect(response.status).to eq 200

      parsed_ideas = JSON.parse(response.body)

      expect(parsed_ideas.count).to eq 2
      expect(parsed_ideas.pluck("title")).to include "Title One"
      expect(parsed_ideas.pluck("title")).to include "Title Two"
    end
  end
end
