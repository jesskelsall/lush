export const categoryStub = {
  data: {
    category: {
      __typename: 'Category',
      name: 'Bath Bombs',
      description: '{"blocks": [{"data": {"text": "\\"Free. Fulfilling. Warm. Restorative. Recumbent. Quiet. Dark. Dreamy. Delicious. Cool. Clarifying. Necessary. Mindless. Subline. Safe. Serene. Healing. Precious. Private. Yearned for. Unthinking. Undisturbed. Uplifting.\\""}, "type": "paragraph"}, {"data": {"text": "Claudia Hammond - The Art of Rest"}, "type": "paragraph"}]}',
      products: {
        __typename: 'ProductCountableConnection',
        edges: [
          {
            __typename: 'ProductCountableEdge',
            node: {
              __typename: 'Product',
              name: 'Bat Art 2',
              slug: 'bat-art',
              category: {
                __typename: 'Category',
                name: 'Bath Bombs',
              },
              rating: 5,
              thumbnail: {
                __typename: 'Image',
                url: 'https://twstg2.eu.saleor.cloud/media/__sized__/products/bat_art_bath_bomb_christmas_2020-thumbnail-255x255.png',
                alt: '',
              },
              pricing: {
                __typename: 'ProductPricingInfo',
                priceRangeUndiscounted: {
                  __typename: 'TaxedMoneyRange',
                  start: {
                    __typename: 'TaxedMoney',
                    net: {
                      __typename: 'Money',
                      currency: 'GBP',
                      amount: 4.5,
                    },
                  },
                },
              },
            },
          },
          {
            __typename: 'ProductCountableEdge',
            node: {
              __typename: 'Product',
              name: 'Big Blue',
              slug: 'big-blue',
              category: {
                __typename: 'Category',
                name: 'Bath Bombs',
              },
              rating: 4.19108280254777,
              thumbnail: {
                __typename: 'Image',
                url: 'https://twstg2.eu.saleor.cloud/media/__sized__/products/big_blue_bath_bomb_2020-thumbnail-255x255.png',
                alt: '',
              },
              pricing: {
                __typename: 'ProductPricingInfo',
                priceRangeUndiscounted: {
                  __typename: 'TaxedMoneyRange',
                  start: {
                    __typename: 'TaxedMoney',
                    net: {
                      __typename: 'Money',
                      currency: 'GBP',
                      amount: 3.95,
                    },
                  },
                },
              },
            },
          },
          {
            __typename: 'ProductCountableEdge',
            node: {
              __typename: 'Product',
              name: 'Blackberry',
              slug: 'blackberry',
              category: {
                __typename: 'Category',
                name: 'Bath Bombs',
              },
              rating: null,
              thumbnail: {
                __typename: 'Image',
                url: 'https://twstg2.eu.saleor.cloud/media/__sized__/products/blackberry_bath_bomb_2020-thumbnail-255x255.png',
                alt: '',
              },
              pricing: {
                __typename: 'ProductPricingInfo',
                priceRangeUndiscounted: {
                  __typename: 'TaxedMoneyRange',
                  start: {
                    __typename: 'TaxedMoney',
                    net: {
                      __typename: 'Money',
                      currency: 'GBP',
                      amount: 3.95,
                    },
                  },
                },
              },
            },
          },
        ],
        pageInfo: {
          __typename: 'PageInfo',
          hasNextPage: true,
          hasPreviousPage: false,
          startCursor: 'WyJiYXQtYXJ0Il0=',
          endCursor: 'WyJob25leS1pLXdhc2hlZC10aGUta2lkcy0yIl0=',
        },
      },
    },
  },
}
