class CreatePups < ActiveRecord::Migration
    def up
      create_table 'pups' do |p|

        p.string 'pup_name'
        p.string 'owner_name'

        p.string 'breed_1'
        p.string 'breed_2'

        p.integer 'breeder_responsibility'
        p.integer 'overall_health'
        p.integer 'trainability'
        p.integer 'social_behavior'
        p.integer 'energy_level'
        p.integer 'simpatico_rating'

        p.text 'comments'

        p.references :breeder

      end
    end

  def down
    drop_table 'pups'
  end
end
