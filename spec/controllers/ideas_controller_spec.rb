require "rails_helper"

RSpec.describe IdeasController do
  fixtures :ideas
  describe "GET index" do
    it "can get all ideas in descending chronological order" do
      get :index

      expect(response.status).to eq 200

      parsed_ideas = JSON.parse(response.body)

      expect(parsed_ideas.count).to eq 2
      expect(parsed_ideas.pluck("title")).to include "Title One"
      expect(parsed_ideas.pluck("title")).to include "Title Two"
    end
  end

  describe "POST create" do
    it "can create a new idea" do
      title = "title test"
      body = "body test"
      post :create, idea: {title: title, body: body}

      expect(response.status).to eq 200

      parsed_idea = JSON.parse(response.body)
      expect(parsed_idea["title"]).to eq "title test"
      expect(parsed_idea["body"]).to eq "body test"
    end
  end

  describe "DELETE destroy" do
    it "can delete an idea" do
      idea = ideas(:one)
      delete :destroy, id: idea.id

      expect(response.status).to eq 204
    end
  end
end
