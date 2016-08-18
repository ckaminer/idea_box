require "rails_helper"

RSpec.feature "user views all ideas", js: true do
  fixtures :ideas
  context "they visit the home page" do
    scenario "they see all pre-existing ideas" do
      visit '/'

      expect(page).to have_content "Welcome to Idea Box"
      expect(page).to have_css "#table-body"
      expect(page).to have_selector(".idea", count: 2)
    end
  end
end
