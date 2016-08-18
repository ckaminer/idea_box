require "rails_helper"

RSpec.feature "user adds an ideas", js: true do
  fixtures :ideas
  context "they visit the home page" do
    scenario "they see all pre-existing ideas" do
      visit '/'

      expect(page).to have_selector(".idea", count: 2)

      fill_in "#new-idea-title", with: "New Title"
      fill_in "#new-idea-body", with: "New Body"
      click_on "Save"

      expect(page).to have_selector(".idea", count: 3)
      expect(page).to have_content "New Title"
      expect(page).to have_content "New Body"
    end
  end
end
