require "rails_helper"

RSpec.feature "user filters ideas on search", js: true do
  fixtures :ideas
  context "they search an idea title" do
    scenario "only ideas with title or body containing string stay on page" do
      visit "/"
      expect(page).to have_selector(".idea", count: 2)

      fill_in "search-bar", with: "Title One"

      expect(page).to have_selector(".idea", count: 1)
      expect(page).to have_content("Title One")
      expect(page).to have_no_content("Title Two")
    end

    scenario "partial title" do
      visit "/"
      expect(page).to have_selector(".idea", count: 2)

      fill_in "search-bar", with: "le One"

      expect(page).to have_selector(".idea", count: 1)
      expect(page).to have_content("Title One")
      expect(page).to have_no_content("Title Two")
    end

    scenario "case insensitive" do
      visit "/"
      expect(page).to have_selector(".idea", count: 2)

      fill_in "search-bar", with: "tITle OnE"

      expect(page).to have_selector(".idea", count: 1)
      expect(page).to have_content("Title One")
      expect(page).to have_no_content("Title Two")
    end
  end

  context "they search an idea body" do
    scenario "only ideas with title or body containing string stay on page" do
      visit "/"
      expect(page).to have_selector(".idea", count: 2)

      fill_in "search-bar", with: "Body One"

      expect(page).to have_selector(".idea", count: 1)
      expect(page).to have_content("Title One")
      expect(page).to have_no_content("Title Two")
    end

    scenario "partial body" do
      visit "/"
      expect(page).to have_selector(".idea", count: 2)

      fill_in "search-bar", with: "dy One"

      expect(page).to have_selector(".idea", count: 1)
      expect(page).to have_content("Title One")
      expect(page).to have_no_content("Title Two")
    end
  end
end
