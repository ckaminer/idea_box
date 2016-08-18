require "rails_helper"

RSpec.feature "user adds an ideas", js: true do
  fixtures :ideas
  context "they fill in all fields" do
    scenario "it is added to table of ideas" do
      visit '/'

      expect(page).to have_selector(".idea", count: 2)

      fill_in "new-idea-title", with: "New Title"
      fill_in "new-idea-body", with: "New Body"
      click_on "Save"

      expect(page).to have_selector(".idea", count: 3)
      within("#table-body") do
        expect(page).to have_content "New Title"
        expect(page).to have_content "New Body"
      end
    end
  end

  context "they leave something blank" do
    scenario "they leave title blank and nothing is added to table" do
      visit '/'

      fill_in "new-idea-title", with: ""
      fill_in "new-idea-body", with: "New Body"
      click_on "Save"

      expect(page).to have_selector(".idea", count: 2)
      within("#table-body") do
        expect(page).to have_no_content "New Body"
      end
    end

    scenario "they leave body blank and nothing is added to table" do
      visit '/'

      fill_in "new-idea-title", with: "New Title"
      fill_in "new-idea-body", with: ""
      click_on "Save"

      expect(page).to have_selector(".idea", count: 2)
      within("#table-body") do
        expect(page).to have_no_content "New Title"
      end
    end
  end
end
