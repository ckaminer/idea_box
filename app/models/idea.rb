class Idea < ApplicationRecord
  validates :title,   presence: true
  validates :body,    presence: true
  validates :quality, presence: true

  default_scope { order('id ASC') }

  enum quality: %w(swill plausible genius)
end
