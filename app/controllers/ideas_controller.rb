class IdeasController < ApplicationController
  def index
    render json: Idea.all
  end

  def create
    idea = Idea.create(idea_params)
    render json: idea
  end

  def destroy
    idea = Idea.find(params[:id])
    idea.destroy
  end

  private
    def idea_params
      params.require(:idea).permit(:id, :title, :body, :quality)
    end
end
