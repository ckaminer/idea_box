class IdeasController < ApplicationController
  def index
    render json: Idea.all
  end
end
