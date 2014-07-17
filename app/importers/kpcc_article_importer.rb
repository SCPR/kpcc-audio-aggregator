module KpccArticleImporter

  SOURCE = "KPCC"

  class << self

    def sync
      kpcc_articles_hash = KpccApiHelper::Articles.last_24_hours

      added = []

      kpcc_articles_hash['articles'].reject { |s|
        AudioStory.exists?(source: SOURCE, article_id:s['id']) || s['audio'].count == 0
      }.each do |kpcc_article|
  
        audio_story = AudioStory.new(
          :source       => SOURCE,
          :article_id   => kpcc_article['id'],
          :url          => kpcc_article['public_url'],
          :title        => kpcc_article['title'],
          :audio_url    => kpcc_article['audio'].first['url'],
          :duration     => kpcc_article['audio'].first['duration'],
          :time_stamp   => kpcc_article['audio'].first['uploaded_at']
        )

        if category = kpcc_article['category']
          audio_story.category = category['title']
        end

        if audio_story.save
          added.push audio_story
          puts "AudioStory saved: #{audio_story.title}"
        else
          puts "Failed to save AudioStory"
        end
      end # each

      added
    end

  end
end