module KpccEpisodesApiHelper

  class Episodes
    include HTTParty
    @base_uri = "http://scpr.org/api/v3/episodes"

    def self.airtalk
      self.get(@base_uri, { query: {program: 'airtalk'} } )
    end

    def self.all_things_considered
      self.get(@base_uri, { query: {program: 'all-things-considered'} } )
    end

    def self.morning_edition
      self.get(@base_uri, { query: {program: 'morning-edition'} } )
    end
  end

  class Articles
    include HTTParty
    @base_uri = "http://scpr.org/api/v3/articles"

    def self.last_24_hours
      self.get(@base_uri)
    end
  end

end