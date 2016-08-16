class IdeasController < ApplicationController
  def index
    render json: Idea.all
  end

  def create
    idea = Idea.create(idea_params)
    render json: idea
  end

  private
    def idea_params
      params.require(:idea).permit(:title, :body, :quality)
    end
end
